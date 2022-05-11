import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'todos',
    initialState: {
        news: [ {
            name: 'Elon Musk Is a Typical Twitter User, Except for One Thing',
            description: 'The platform has always been the perfect place to indulge your whims. But when you’re the richest man in the world, those whims can grow significantly.'
        },
            {
                name: 'Ohio Senate Race Pits Trump and Son Against Big G.O.P. Group',
                description: 'The Club for Growth has lined up behind Josh Mandel. Donald J. Trump and his eldest son, Donald Jr., are backing J.D. Vance. Tuesday’s outcome will be a crucial test of the former president’s sway.'
            },
            {
                name: 'China’s Covid Lockdown Outrage Tests Limits of Triumphant Propaganda',
                description: 'Public anger and grief over the bungled lockdown in Shanghai is creating a credibility crisis for the country’s leader, Xi Jinping, and his zero Covid policies.'
            },
            {
                name: 'A Long Way Home for ‘Looted’ Art Is Getting Shorter',
                description: 'Curators at major museums are increasingly grappling with a thorny topic: restitution.'
            },
            {
                name: 'McCarthy Feared G.O.P. Lawmakers Put ‘People in Jeopardy’ After Jan. 6',
                description: 'New audio recordings reveal Kevin McCarthy worried that comments by his far-right colleagues could incite violence. He said he would try to rein in the lawmakers, but has instead defended them.'
            }],
    },
    reducers: {
        reverseNews(state, action) {
            console.log(state);
            console.log(action)
            state.news.reverse()
        },
    },
});

export const {reverseNews} = slice.actions;

export default slice.reducer;