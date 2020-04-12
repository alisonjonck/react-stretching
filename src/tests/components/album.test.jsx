import Album from '../../components/Pages/Album';

describe('<Album /> tests', function () {
    it('renders Album', function () {
        const wrapper = shallow(<Album/>);

        expect(wrapper).to.have.length(1);
    });
});
