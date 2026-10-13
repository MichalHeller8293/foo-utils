import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'פוסט ראשון', content: 'לומדים Redux Toolkit לקראת הבוחן!' },
  { id: '2', title: 'פוסט שני', content: 'הכל הולך מצוין צעד אחר צעד.' }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // כאן נגדיר בהמשך פונקציות לעדכון הסטייט, כמו הוספת פוסט חדש
  }
});

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;