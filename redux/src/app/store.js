import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice'; // ייבוא הרידיוסר של הפוסטים

export const store = configureStore({
  reducer: {
    posts: postsReducer, // חיבור הסלייס למחסן המרכזי
  },
});