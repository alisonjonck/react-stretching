import Index from '../../components/Pages/Index';
import { Provider } from "react-redux";
import store from '../../store';

describe('<Index /> tests', function () {
    it('renders Index', function () {
        const wrapper = shallow(<Provider store={store}><Index /></Provider>);

        expect(wrapper).to.have.length(1);
    });
});
