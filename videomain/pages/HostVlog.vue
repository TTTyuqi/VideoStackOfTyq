<template>
    <v-hover>
      <template v-slot="{ hover }">
        <v-card
        :elevation="hover ? 24 : 6"
        class="mx-auto"
        dark
        max-width="400"
        >
            <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            ></v-img>

            <v-card-title>
            Top western road trips
            </v-card-title>

            <v-card-subtitle>
            1,000 miles of wonder
            </v-card-subtitle>

            <v-card-actions>
        <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row
            align="center"
            justify="end"
            >
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
            <span class="subheading">45</span>
            </v-row>
        </v-list-item>
        </v-card-actions>
    </v-card>
     </template>
    </v-hover>
</template>

<script>
export default {
    name:'HostVlog',
    async asyncData({$axios}){
        let query={
            size:10,
            page:1,
            sort:{},
            where:{}
        }
        const vlogList = await $axios.$get('/vlogs/vlog',{params:query})
        // console.log('vlogList',vlogList)
        return {
            query,
            vlogList
        }
    },
    data () {
        return {
            
        }
    }


}
</script>

<style>

</style>