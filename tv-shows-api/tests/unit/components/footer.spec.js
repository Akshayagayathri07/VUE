import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import AppFooter from "@/components/AppFooter.vue";

describe("In footer Component", () => {
  let appFooterWrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
   // Vue.use(VueRouter);
    appFooterWrapper = shallowMount(AppFooter, {
      Vue
    });
  });

  afterEach(() => {
    appFooterWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appFooterWrapper.isVueInstance).toBeTruthy();
  });
  it("it shoud have <v-footer> element", () => {
    expect(appFooterWrapper.contains("v-footer-stub")).toBe(true);
  });
 
  it("it renders the correct text", () => {
    const expected = "2020";
    expect(appFooterWrapper.text()).toContain(expected);
  });
 });
