<template>
    <el-container class="layoutPage">
        <el-header class="layoutHeader" height="48px">
            <label class="titleName">{{$brandInfo.brandName}}管理后台</label>
            <label class="userName">{{userInfo.userName}}</label>
            <img @click="signOut" class="signoutImg" src="@/assets/icon_signout.png" alt="退出">
        </el-header>
        <el-container>
            <div class="layoutAside">
                <template v-if="isCollapse">
                    <el-tooltip class="item" effect="dark" placement="left" content="展开菜单">
                        <div class="hideMenuDiv" @click="isCollapse = !isCollapse">
                            <i class="el-icon-d-arrow-right"></i>
                        </div>
                    </el-tooltip>
                </template>
                <template v-else>
                    <div class="hideMenuDiv" @click="isCollapse = !isCollapse">
                        <i class="el-icon-d-arrow-left"> 隐藏菜单</i>
                    </div>
                </template>
                <el-menu
                :unique-opened="true"
                :router="true"
                :collapse="isCollapse"
                class="elMenu"
                text-color="#fff"
                background-color="#37363b"
                active-text-color="#ff9234"
                :default-active="$route.name">
                <el-menu-item index="welcome">
                    <i class="el-icon-location-outline"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                    <template v-for="item in menus">
                        <el-submenu v-if="item.children.length > 0" :key="item.menuId" :index="item.menuPath">
                            <template slot="title">
                                <i :class="item.menuIcon"></i>
                                <span slot="title">{{item.menuName}}</span>
                            </template>
                            <el-menu-item v-for="childItem in item.children" :key="childItem.menuId" :index="childItem.menuPath">
                                {{childItem.menuName}}
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :key="item.menuId" :index="item.menuPath">
                            <i :class="item.menuIcon"></i>
                            <span slot="title">{{item.menuName}}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </div>
            <el-main class="layoutMain">
                <el-breadcrumb separator-class="el-icon-arrow-right" class="layoutBreadcrumb">
                    <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="$route.meta && $route.meta.prePreTitle">{{ $route.meta.prePreTitle }}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="$route.meta && $route.meta.preTitle">{{ $route.meta.preTitle }}</el-breadcrumb-item>
                    <el-breadcrumb-item v-if="$route.meta && $route.meta.title">{{ $route.meta.title }}</el-breadcrumb-item>
                </el-breadcrumb>
                <router-view :style="'height:' + routerViewHeight + 'px'"/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false,
            menus: [],
            userInfo: {
                userName: ''
            },
            routerViewHeight: 300
        }
    },
    created() {
        this.initMenu()
        this.routerViewHeight = (document.body.clientHeight - 220) > 300 ? (document.body.clientHeight - 220) : 300
    },
    methods: {
        signOut() {
            this.$apis.logout().then(res => {
                if (res.code === '2000') {
                    localStorage.clear()
                    this.$router.push('/login')
                } else {
                    this.$message.error(res.message)
                }
            }).catch(error => {
                this.$message.error(error.message)
            })
        },
        initMenu() {
            this.$apis.initMenu().then(res => {
                if (res.code === '2000') {
                    this.menus = res.data.menus
                    this.userInfo = res.data.userInfo
                } else {
                    this.$message.error(res.message)
                }
            }).catch(error => {
                this.$message.error(error.message)
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './layout.less';
</style>
