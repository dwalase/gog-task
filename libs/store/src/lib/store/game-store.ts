import { patchState, signalStore, withHooks, withMethods } from '@ngrx/signals';
import { Game, Games } from '@gog-task/core';
import { setEntities, withEntities } from '@ngrx/signals/entities';

export const GameStore = signalStore(
  { providedIn: 'root' },
  withEntities<Game>(),
  withMethods((store) => ({
      load() {
        patchState(store, setEntities(Games))
      }
    })
  ),
  withHooks({
    onInit(store) {
      store.load();
    }
  }),
);
