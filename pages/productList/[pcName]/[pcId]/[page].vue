<template>
  <div class="products-wrap">
    <div class="head">
      <!-- <img src="https://dummyimage.com/1200x200/ccc/fff" alt="" /> -->
      <img :src="productsImg" alt="" />
      <span class="head-title">Products</span>
    </div>
    <div class="products-content" v-loading="state.loading">
      <div class="left hidden-md-and-down">
        <el-tree
          style="max-width: 600px"
          node-key="id"
          :default-expanded-keys="[Number(route.params.pcId)]"
          :default-checked-keys="[expandedProductClassId]"
          :data="state.productsClassList"
          :props="state.defaultProps">
          <template #default="{ node, data }">
            <div
              :class="{ 'omit-1': true, 'list-item-wrap': true, 'tab-highlignt': data.id == expandedProductClassId }"
              :title="node.label">
              <NuxtLink :to="`/productList/${data.labelEn.replace(/\s/g, '-')}/${data.id}/1`" class="pc-a">
                {{ node.label }}
              </NuxtLink>
            </div>
          </template>
        </el-tree>
      </div>
      <div class="right">
        <div class="bread-wrap">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item><NuxtLink to="/productList/Products/100/1">Products List</NuxtLink></el-breadcrumb-item>
            <el-breadcrumb-item>{{ state.activeClass }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div v-if="state.productsList.length > 0" class="product-list">
          <el-row>
            <el-col :md="6" :sm="8" :xs="24" v-for="(item, index) in state.productsList" :key="index">
              <div class="p-item">
                <div class="img-wrap">
                  <img :src="item.avatar" :alt="item.productNameEn" class="p-img" />
                </div>
                <div class="p-name omit-1">
                  <!-- <NuxtLink
                    :to="`/productList/${route.params.pcName}/${route.params.pcId}/detail/${item.productId}`"
                    :title="item.productNameEn">
                    {{ item.productNameEn }}
                  </NuxtLink> -->
                  <NuxtLink
                    :to="`/productList/${item.productClass.productClassNameEn.replace(/\s/g, '-')}/${
                      item.classId
                    }/detail/${item.productId}`"
                    :title="item.productNameEn">
                    {{ item.productNameEn }}
                  </NuxtLink>
                </div>
                <div class="item"></div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <!-- <div class="pagination p-md">
              <el-pagination
                v-model:currentPage="state.queryParams.pageNum"
                v-model:page-size="state.queryParams.pageSize"
                :total="state.total"
                :page-sizes="[10, 20, 50, 100]"
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="total, sizes, prev,pager,next, jumper">
                <div slot="pager">2222</div>
              </el-pagination>
            </div>
            <div class="pagination p-xs">
              <el-pagination
                v-model:currentPage="state.queryParams.pageNum"
                v-model:page-size="state.queryParams.pageSize"
                layout="prev, pager, next"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :total="state.total"></el-pagination>
            </div> -->
            <paginationProduct
              :total="state.total"
              :pageSize="10"
              :currentPage="Number(route.params.page)"></paginationProduct>
          </el-row>
        </div>
        <el-empty v-else description="No Data" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import productsImg from "~/assets/products.jpg";
const route = useRoute();
const expandedProductClassId = ref([Number(route.params.pcId)]);
const state = reactive({
  loading: false,
  activeClass: "",
  productsClassList: [] as any,
  productsList: [] as any,
  total: 0,
  defaultProps: {
    children: "children",
    label: "labelEn",
  },
  queryParams: {
    pageNum: Number(route.params.page),
    pageSize: 10,
    classId: "",
  },
});

const elMenuRef = ref();
const config = useRuntimeConfig();
const baseUrl = config.public.apiBaseUrl;

// 点击类别查询产品
// const handleNodeClick = ({ id, labelEn }) => {
//   state.queryParams.classId = id;
//   state.activeClass = labelEn;
//   handleGetProductsList();
// };
// 获取产品分类
const handleGetProductsClassList = async () => {
  try {
    state.loading = true;
    // const res = await $fetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
    const { data, pending, error, refresh } = await useFetch(`${baseUrl}/web-api/webOffice/product/productsClassTree`);
    const res: any = data.value;
    if (res.code === 200) {
      state.productsClassList = res.data;
    }
  } catch (err) {
  } finally {
    state.loading = false;
  }
};
// 获取产品列表
const handleGetProductsList = async () => {
  try {
    state.loading = true;
    const queryStr = new URLSearchParams(state.queryParams).toString();
    const { data, pending, error, refresh } = await useFetch(`${baseUrl}/web-api/webOffice/product/list?${queryStr}`);
    const res: any = data.value;
    if (res.code === 200) {
      state.productsList = res.rows;
      state.total = res.total;
    }
  } catch (err) {
  } finally {
    state.loading = false;
  }
};
// 点击类别查询产品
// const handleClassSearch = ({ id, labelEn }) => {
//   state.queryParams.classId = id;
//   state.activeClass = labelEn;
//   handleGetProductsList();
// };
const handleCurrentChange = (val: number) => {
  handleGetProductsList();
};
// 改变页面容量
const handleSizeChange = (val: number) => {
  state.queryParams.pageNum = 1;
  state.queryParams.pageSize = val;
  handleGetProductsList();
};
handleGetProductsClassList();

state.queryParams.classId = route.params.pcId;
state.activeClass = route.params.pcName.replace(/-/g, " ");
handleGetProductsList();
</script>
<style lang="scss" scoped>
.products-wrap {
  .head {
    position: relative;
    .head-title {
      color: #fff;
      font-size: 0.5rem;
      font-weight: 600;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      width: 100%;
    }
  }
  .products-content {
    margin: 0 1rem;
    padding: 0.1rem 0;
    display: flex;
    .left {
      flex-shrink: 0;
      width: 20%;
      .el-collapse {
      }
      .tab-highlignt {
        font-weight: bold;
      }
    }
    .right {
      flex-grow: 1;
      padding: 0.1rem;
      .bread-wrap {
        margin-bottom: 0.1rem;
      }
      .product-list {
        .p-item {
          padding: 0.1rem 0;
          border: 1px solid transparent;
          transition: all 0.2s;
          &:hover {
            border: 1px solid #ffbf6c;
          }
          .img-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            margin: 0 auto;
            height: 200px;
            margin-bottom: 0.05rem;
            // border: 1px solid red;
            .p-img {
              display: block;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .p-name {
            cursor: pointer;
            margin: 0 auto;
            width: 80%;
            text-align: center;
            &:hover {
              color: #ffbf6c;
              font-weight: bold;
            }
          }
          .item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
        .pagination {
          width: 100%;
          padding: 0.05rem 0;
          display: flex;
          justify-content: center;
        }
        .p-md {
          display: flex;
        }
        .p-xs {
          display: none;
        }
      }
    }
  }
  @media only screen and (max-width: 992px) {
    .products-content {
      margin: 0 0.1rem;
      .right {
        .product-list {
          .p-md {
            display: none;
          }
          .p-xs {
            display: flex;
          }
        }
      }
    }
  }
}
</style>
