import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { Game, Games } from '@gog-task/core';
import { setEntities, updateEntity, withEntities } from '@ngrx/signals/entities';

export const GameStore = signalStore(
  { providedIn: 'root' },
  withEntities<Game>(),
  withMethods((store) => ({
      load() {
        patchState(store, setEntities(Games))
      },
      addToCart(id: number) {
        patchState(store, updateEntity(
          {
            id: id, changes: { ownership: 'InCart' }
          })
        )
      }
    })
  ),
  withHooks({
    onInit(store) {
      store.load();
    }
  }),
);
