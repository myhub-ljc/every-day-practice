<template>
    <div>
        <product-list :titles="titles" @btnClick="btnClick"></product-list>
        <h2>{{titles[currentIndex]}}</h2>
    </div>
</template>

<script>
    import ProductList from "./productList.vue";
    export default {
        components: {
            ProductList
        },
        data() {
            return {
                titles: ["新品", "潮流", "精选"],
                currentIndex: 0
            }
        },
        methods: {
            btnClick(index) {
                this.currentIndex = index;
            }
        }
    }
</script>