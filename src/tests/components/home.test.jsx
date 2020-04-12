import Home from '../../components/Pages/Home';
import { Provider } from "react-redux";
import store from '../../store';

describe('<Home /> tests', function () {
    it('renders Home', function () {
        const wrapper = shallow(<Provider store={store}><Home/></Provider>);

        expect(wrapper).to.have.length(1);
    });
});
