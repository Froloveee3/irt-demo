<template>
  <div class="table-container">
    <table class="custom-table">
      <tbody>
        <tr v-for="(header, headerIndex) in headers" :key="headerIndex">
          <td class="cell-td"><p class="cell">{{ header }}</p></td>
          <td class="cell-td" v-for="(row, rowIndex) in rows" :key="rowIndex">
            <p class="cell">{{ row[headerIndex] }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  headers: {
    type: Array as () => string[],
    required: true,
  },
  rows: {
    type: Array as () => Array<string[]>,
    required: true,
  },
});
</script>

<style scoped>
.cell {
  margin: 0;
  padding: 0;
  width: 0;
}
.table-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: auto;
  margin-top: 0.5rem;
}

.custom-table {
  border-collapse: separate;
  border-radius: 0.25rem;
  border-spacing: 0;
  border: 1px solid #ffffff33;
  overflow: hidden;
  width: 100%;
  text-align: center;
  background: var(--color-table-bg);
  color: white;
  font-family: 'Inter', sans-serif;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ffffff33;
  font-size: 0.65rem;
  font-weight: 300;
  padding: 0.625rem;
  border-left: none;
  border-top: none;
  box-sizing: border-box;
}

.custom-table th {
  font-weight: bold;
}

.custom-table td:last-child {
  border-right: none;
}

.custom-table tr:last-child td {
  border-bottom: none;
}

.custom-table td:first-child {
  text-align: left;
}

.custom-table tr:not(:first-child) td:not(:first-child) {
  font-size: 0.75rem;
}

@media (max-width: 1100px) {
  .custom-table th, .custom-table td {
    font-size: 0.45rem;
    padding: 0.55rem;
  }

  .custom-table tr:not(:first-child) td:not(:first-child) {
    font-size: 0.55rem;
  }
}

@media (max-width: 836px) {
  .custom-table th, .custom-table td {
    font-size: 0.35rem;
    padding: 0.45rem;
  }

  .custom-table tr:not(:first-child) td:not(:first-child) {
    font-size: 0.45rem;
  }
}
</style>
