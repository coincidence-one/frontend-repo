import { configureStore } from '@reduxjs/toolkit';
import uploadmModalReducer from './slices/uploadModalSlice';
import promoteProjectDetailModalReducer from './slices/promoteProjectDetailModal';
import recruitModalReducer from './slices/recruitModalSlice';

export const store = configureStore({
  reducer: {
    uploadModal: uploadmModalReducer,
    recruitModal: recruitModalReducer,
    promoteProjectDetailModal: promoteProjectDetailModalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
