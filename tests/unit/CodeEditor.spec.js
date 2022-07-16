import { shallowMount } from "@vue/test-utils";
import CodeEditor from "@/components/CodeEditor.vue";

describe("CodeEditor.vue", () => {
  it("renders a code editor", () => {
    const wrapper = shallowMount(CodeEditor);
    expect(wrapper.contains('div')).toBe(true)
  });
});
