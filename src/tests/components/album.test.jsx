import Album from '../../components/Pages/Album';
import { Provider } from "react-redux";
import store from '../../store';

describe('<Album /> tests', function () {
    it('renders Album', function () {
        const wrapper = shallow(<Provider store={store}><Album match={{params:{album: "teste"}}}/></Provider>);

        expect(wrapper).to.have.length(1);
    });
});
