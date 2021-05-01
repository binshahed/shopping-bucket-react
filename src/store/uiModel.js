import { action} from "easy-peasy";

const UIModel= {
    searchOverlay:false,
    setSearchOverlayFocus: action((state, payload) => {
        state.setSearchOverlayFocus= payload;
    })
}
export default  UIModel