import { SingletonRouter } from "next/router";
import { shallow, mount } from "enzyme";
import { Route } from "../src/Router/Route" 
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

configure({adapter: new Adapter()})

it("can run a test", () => {
    expect(true).toEqual(true)
});

describe("Router renders correctly", () => {
    const fakeRouter: SingletonRouter =  { 
            router: null,
            query: { foo: "bar", bar: "quaz" }, 
            readyCallbacks: null, 
            ready: null, 
            pathname: null,
            route: null,
            components: null,
            back: null,
            beforePopState: null,
            prefetch: null,
            push: null,
            reload: null,
            replace: null,
            events: null 
        };
    const FakeComponent: React.SFC = () => <div />
    it("should render null if params do not match", () => {
        const wrapper = shallow(
            <Route queryKey="foo" to="notBar" router={fakeRouter} component={FakeComponent} />
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    });

    it("should render the component if params  match", () => {     
        const wrapper = shallow(
            <Route queryKey="foo" to="bar" router={fakeRouter} component={FakeComponent} />
        );

        expect(wrapper.isEmptyRender()).toBe(false);
    })

    it("should render null if we a component isn't passed in", () => {
        const wrapper = shallow(
            <Route queryKey="foo" to="bar" component={null} router={fakeRouter} />
        );

        expect(wrapper.isEmptyRender()).toBe(true);
    })

    it("should render exact component", () => {
        const wrapper = shallow(
            <Route queryKey="foo" to="bar" router={fakeRouter} component={FakeComponent} />
        );

        expect(wrapper.find(FakeComponent).exists()).toBe(true);
    })
    it("should render null when the router is not present", () => {
        const wrapper = shallow(
            <Route queryKey="foo" to="bar" component={FakeComponent} />
        );
        
        expect(wrapper.isEmptyRender()).toBe(true);
    })
});


