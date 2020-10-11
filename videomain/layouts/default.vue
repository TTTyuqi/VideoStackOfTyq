<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
    >
      <v-list dense>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">我的关注</v-subheader>
        <v-list>
            <v-list-item
              v-for="item in items2"
              :key="item.text"
              link
            >
              <v-list-item-avatar>
                <img
                  :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                  alt=""
                >
              </v-list-item-avatar>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          <v-list-item class="mt-4" link>
            <v-list-item-action>
              <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon color="grey darken-1">mdi-cog</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
          </v-list-item>
          </v-list>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar 
    clipped-left 
    app 
    color="red"
    dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
       <v-icon
          class="mx-4"
          large
        >
          mdi-youtube
        </v-icon>
        <v-toolbar-title class="mr-12 align-center">
          <span class="title">VlogShow</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row
          align="center"
          style="max-width: 650px"
        >
          <v-text-field
            :append-icon-cb="() => {}"
            placeholder="Search..."
            single-line
            append-icon="mdi-magnify"
            color="white"
            hide-details
          ></v-text-field>
        </v-row>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: '首页',
          to: '/',
        },
        {
          icon: 'mdi-trending-up',
          title: '热门视频',
          to: '/HostVlog',
        },
        {
          icon: 'mdi-youtube-subscription',
          title: '我的视频',
          to: '/inspire',
        },
       {
          icon: 'mdi-history',
          title: '历史记录',
          to: '/inspire',
        },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
    ],
    }
  },
}
</script>
