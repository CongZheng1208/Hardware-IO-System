<template>
  <el-container style="display: flex; flex-direction: column;">


    <el-header style="text-align: left; font-weight: bold; color: rgb(140, 139, 139); text-shadow: 1px 1px 1px #000;
      padding-top: 3vh; padding-left: 4vh; font-size: 20px;">
      Hardware Inbound and Outbound Management System
    </el-header>
    <el-main style=" flex: 1; padding: 0;">
      <el-table
        highlight-current-row
        @row-click="handleRowClick"
        :data="rawData"
        height="600"
        :sort-method="customSortMethodForProgressColumn"

        :empty-text="'No Data Display'"
      >
        <el-table-column prop="materialCode" label="materialCode" fixed sortable :width="null" :min-width="150"></el-table-column>
        <el-table-column prop="catalogName" label="Catalog Name" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="category1" label="Category 1" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="category2" label="Category 2" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="model" label="Model" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="value" label="Value" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="accuracy" label="Accuracy" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="qualityGrade" label="Quality Grade" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="description" label="Description" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="package" label="Package" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="lowTemperature" label="Low Temperature" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="highTemperature" label="High Temperature" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="manufacturer" label="Manufacturer" sortable :width="null" :min-width="100"></el-table-column>
        <el-table-column prop="manufacturerPartNumber" label="Manufacturer Part Number" fixed sortable :width="null" :min-width="240"></el-table-column>
        <el-table-column prop="domesticOrImport" label="Domestic/Import" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="packaging" label="Packaging" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="quantity" label="Quantity" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="3DModel" label="3D Model" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="datasheet" label="Datasheet" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="schematicDiagram" label="Schematic Diagram" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="PCBLayout" label="PCB Layout" sortable :width="null" :min-width="180"></el-table-column>
        <el-table-column prop="note" label="Note" sortable :width="null" :min-width="180"></el-table-column>

      </el-table>
    </el-main>
    <el-footer>
      <div>
      </div>
      <div>
          <el-button class="footer-btn" @click="inputRecording()">INPUT</el-button>
          <el-button class="footer-btn" @click="outputRecording()">OUTPUT</el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
  // 在需要使用公用函数的组件中
  // import { printPage, customSortMethodForProgressColumn } from '../../../utils/utils.js';
  import HardwareDetailsHttp from '../api/HardwareDeatilsHttp.js'
  export default {
    data() {
      return {
        rawData: [],

        selectedRowStatus: ''
      }
    },
    methods: {

      /**
       * 本函数用于更新更新选中行的status属性到selectedRowStatus变量
       * @param {string} row - menus数据的name属性
       */
      handleRowClick(row) {
        this.selectedRowStatus = row.status;
      },



      /**
       * 本函数用于根据排序对象确定排序逻辑
       * @param {number/string} a - 排序对象1
       * @param {number/string} b - 排序对象2
       * @returns {number/string} 排序逻辑
       */
      customSortMethodForProgressColumn(a, b) {
        // 判断a和b的类型
        if (typeof a === 'string' && typeof b === 'string') {
          // 字符串类型，使用localeCompare进行字典序排序
          return a.localeCompare(b);
        } else {
          // 数字类型，根据数值大小排序
          return a - b;
        }
      },

      /**
       * 本函数用于硬件入库
       */
      inputRecording() {
        console.log("IN")
      },

      /**
       * 本函数用于硬件出库
       */
      outputRecording() {
        console.log("OUT")
      }
    },
    mounted() {
      HardwareDetailsHttp.get('hd/getHardwareDetails.php')
        .then(response => {
          response.forEach(element => {
            this.rawData.push({
              materialCode: element.materialCode,
              catalogName: element.catalogName,
              category1: element.category1,
              category2: element.category2,
              model: element.model,
              value: element.value,
              accuracy: element.accuracy,
              qualityGrade: element.qualityGrade,
              description: element.description,
              package: element.package,
              lowTemperature: element.lowTemperature,
              highTemperature: element.highTemperature,
              manufacturer: element.manufacturer,
              manufacturerPartNumber: element.manufacturerPartNumber,
              domesticOrImport: element.domesticOrImport,
              packaging: element.packaging,
              quantity: element.quantity,
              ThreeDModel: element.ThreeDModel,
              datasheet: element.datasheet,
              schematicDiagram: element.schematicDiagram,
              PCBLayout: element.PCBLayout,
              note: element.note
            })
          });
        })
        .catch(error => {
          console.error(error); // 处理请求错误
        }
      );

      console.log(this.rawData)
    },

  }

</script>

<style scoped>

</style>

