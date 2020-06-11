import { shallowMount,createLocalVue } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import About from "@/views/About.vue";

describe("In About Component", () => {
  let aboutWrapper;
  Vue.use(Vuetify)
  beforeEach(() => {
    aboutWrapper = shallowMount(About, {
     Vue,
    });
  });

  afterEach(() => {
    aboutWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(aboutWrapper.isVueInstance).toBeTruthy();
  });

  it('it should have a div element with class="v-container"', () => {
    expect(aboutWrapper.html()).toContain("v-container-stub");
  });

  it("it renders the correct text", () => {
    const expected = `This website provides the details of the shows telecasted
    on the channel. It also provides the episode details, cast, crew and summary
    of the shows. All the information regarding any tv show are provided.`;
    expect(aboutWrapper.text()).toContain(expected);
  });
})