import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import _ from "lodash";

configure({ adapter: new Adapter() });

// somewhere on top
jest.unmock("lodash");

// then
_.debounce = jest.fn((fn) => fn);
