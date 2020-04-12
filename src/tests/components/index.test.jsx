import Index from '../../components/Pages/Index';

describe('<Index /> tests', function () {
    it('renders Index', function () {
        const wrapper = shallow(<Index />);

        expect(wrapper).to.have.length(1);
    });
});
