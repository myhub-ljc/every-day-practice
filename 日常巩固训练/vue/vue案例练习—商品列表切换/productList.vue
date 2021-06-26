<template>
    <div class="list">
        <div class="item" 
             :class="{active: currentIndex === index}"
             v-for="(title, index) in titles" 
             :key="title">
            <span @click="btnClick(index)">{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default{
        emits: ["btnClick"],
        props: {
            titles: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
              currentIndex: 0
            }
        },
        methods: {
            btnClick(index) {
                // console.log(index);
                this.currentIndex = index;
                this.$emit("btnClick", index)
            }
        }
    }
</script>

<style scoped>
    .list{
        display: flex;
        width: 200px;
    }

    .item{
        flex: 1;
    }

    .item.active{
        color: red;
    }
    
    .item.active span{
        border-bottom: 1px solid red;
    }
</style>