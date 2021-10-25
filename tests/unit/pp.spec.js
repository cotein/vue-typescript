import {mount} from '@vue/test-utils';
import ppComponent from '../../src/components/pp.vue';

/* test("Mi primer prueba con vue testing", () => {

    const wrapper = mount(ppComponent);
    console.log(wrapper.html());
    expect(wrapper.html()).toBe(`<div>
        <h4>Una prueba</h4>
    </div>`); 
}); */

test('Otra prueba', () => {
    const wrapper = mount(ppComponent, {
        propsData : {
            mensaje : 'fucking prueba'
        }
    });

    //expect(wrapper.html()).toBe("<div><h4>Una prueba</h4>fucking prueba</div>");
    expect(wrapper.props().mensaje).toBe('fucking prueba');
});