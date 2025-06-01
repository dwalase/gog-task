import { patchState, signalStore, withComputed, withHooks, withMethods } from '@ngrx/signals';
import { Game, Games } from '@gog-task/core';
import { setEntities, updateEntity, withEntities } from '@ngrx/signals/entities';
import { computed } from '@angular/core';

export const GameStore = signalStore(
  { providedIn: 'root' },
  withEntities<Game>(),
  withComputed(({ entities }) => ({
    notFeatured: computed(() =>
      entities().filter((game) => !game.featured)
    ),
    inCart: computed(() =>
      entities().filter((game) => game.ownership === 'InCart')
    )
  })),
  withMethods((store) => ({
    load() {
      patchState(store, setEntities(Games));
    },
    addToCart(id: number) {
      patchState(
        store,
        updateEntity({
          id: id,
          changes: { ownership: 'InCart' },
        })
      );
    },
  })),
  withHooks({
    onInit(store) {
      store.load();
    },
  })
);
