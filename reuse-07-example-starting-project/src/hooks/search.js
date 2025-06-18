import { ref, computed, watch } from 'vue';

export default function useSearch(items, searchProp) {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(function () {
    let filterdItems = [];
    if (activeSearchTerm.value) {
      filterdItems = items.value.filter((item) =>
        item[searchProp].includes(activeSearchTerm.value)
      );
    } else if (items) {
      filterdItems = items.value;
    }
    return filterdItems;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return { enteredSearchTerm, updateSearch, availableItems };
}
