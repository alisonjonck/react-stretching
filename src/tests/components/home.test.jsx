import Home from '../../components/Pages/Home';

describe('<Home /> tests', function () {
    it('renders Home', function () {
        const wrapper = shallow(<Home>Hello World!</Home>);

        expect(wrapper).to.have.length(1);
    });
});
