<template>
  <b-container fluid>
    <b-container fluid>
      <b-card sub-title="Model Adeo">

        <b-input-group size="md" prepend="MOD_">

          <b-form-input placeholder="введите номер или название модели, например 200767 или Дрели аккумуляторные"></b-form-input>

          <b-input-group-append>
            <b-btn variant="secondary">применить</b-btn>
          </b-input-group-append>

        </b-input-group>

        <b-container>
          <br>
          <b-row>
            <b-col cols="8">
              <h3>Название модели</h3>
            </b-col>
            <b-col>2 of 3 </b-col>
            <b-col><b-btn v-b-toggle.collapse1 size="sm" variant="outline-primary"> подробно </b-btn></b-col>
          </b-row>
          <b-collapse id="collapse1" class="mt-2">
            <b-card>
              <p class="card-text">
                Наименование:<br>
                fr: De rote te tua<br>
                en: De rote te tua<br>
                ru: De rote te tua<br>
                <br>
                Артикулов: 237<br>
                 - из них AVS: 125<br>
                 - без описаний: 45<br>
                 - без AVS и описаний: 12<br>
                <br>
                Артикулов по отделам:<br>
                  4 отдел - 43 арт. (без AVS - 12)<br>
                  7 отдел - 17 арт. (без AVS - 4)<br>
                <br>
                Ближайшие модели:<br>
                МОД Такая-то<br>
                МОД Сякая-то<br>
              </p>
            </b-card>
          </b-collapse>
        </b-container>
      </b-card>
    </b-container>

    <b-container fluid>
      <b-card no-body>
        <b-tabs pills card vertical v-model="tabIndex">
          <b-tab title="Table" active :title-link-class="linkClass(0)">
            <jump-model-table/>
          </b-tab>
          <b-tab title="Attributes" :title-link-class="linkClass(1)">
            <jump-model-attributes/>
          </b-tab>
          <b-tab title="Analogs" :title-link-class="linkClass(2)">
            <jump-model-analogs/>
          </b-tab>
          <b-tab title="Complementary" :title-link-class="linkClass(3)">
            <jump-model-complementary/>
          </b-tab>
          <b-tab title="Model info" :title-link-class="linkClass(4)">
            <jump-model-model-details/>
          </b-tab>
        </b-tabs>
      </b-card>
    </b-container>

  </b-container>
</template>

<script>
  import AnalogsComponent from './model/analogs'
  import AttributesComponent from './model/attributes'
  import ComplementaryComponent from './model/complementary'
  import ModelDetailsComponent from './model/modelDetails'
  import TableComponent from './model/table'

  export default {
    name: 'model',
    data () {
      return {
        tabIndex: 0
      }
    },
    methods: {
      linkClass (idx) {
        if (this.tabIndex === idx) {
          return ['bg-secondary', 'text-light']
        } else {
          return ['bg-light', 'text-secondary']
        }
      }
    },
    components: {
      'jump-model-analogs': AnalogsComponent,
      'jump-model-attributes': AttributesComponent,
      'jump-model-complementary': ComplementaryComponent,
      'jump-model-model-details': ModelDetailsComponent,
      'jump-model-table': TableComponent
    }
  }
</script>

<style>

</style>
