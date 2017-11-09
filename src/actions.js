import store from './store';

export const play=()=>{
    (store.getState().playlist[store.getState().nowPlayingIndex]).play();

    console.log(store.getState().playlist[store.getState().nowPlayingIndex]);
}
export const stop=()=>{
    (store.getState().playlist[store.getState().nowPlayingIndex]).stop();
    console.log(store.getState().playlist[store.getState().nowPlayingIndex]);
}
export const next=()=>{
    (store.getState().playlist[store.getState().nowPlayingIndex]).stop();
    let newIndex=store.getState().nowPlayingIndex+1;
    if(newIndex == store.getState().playlist.length) {
        newIndex = 0;
    }
    store.setState({
        nowPlayingIndex:newIndex
    })   
    play();
    console.log(store.getState().playlist[store.getState().nowPlayingIndex]);
}