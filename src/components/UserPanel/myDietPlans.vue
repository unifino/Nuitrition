<template>
    <div id="my_dietPlans_box" class="init" ref="dietPlans">
        
    </div>
</template>

// -- =====================================================================================

<script setup lang="ts">

import { ref }                              from 'vue'
import { useStore }                         from 'vuex'
import * as TS                              from '@/types/types'
import * as Tools                           from '@/mixins/Tools';

const store: TS.Store = useStore()

// -- =====================================================================================

    const dietPlans = ref<HTMLElement>( {} as HTMLElement )

// -- =====================================================================================

    const _out = () => Tools.userAnime( dietPlans, "Out" )
    const _in = ( skip = false ) => Tools.userAnime( dietPlans, "In", skip )

// -- =====================================================================================

    store.watch(
        getters => getters.ort,
        ( nV, oV ) => { 
            if ( oV === TS.Orts.UserPanel ) 
                if ( store.getters.userTool === TS.UserTools.DietPlans )
                    _out() 
        }
    )

    store.watch(
        getters => getters.userTool,
        ( nV, oV ) => {
            if ( nV !== oV ) {
                if ( nV === TS.UserTools.DietPlans ) _in( oV === TS.UserTools.null )

                if ( oV === TS.UserTools.DietPlans ) _out()
            }
        }
    )

// -- =====================================================================================

</script>

// -- =====================================================================================

<style scoped>

    #my_dietPlans_box{
        background-color: transparent;
        height: 620px;
        width: 700px;
        top: 50%;
        left: 300px;
        padding: 40px;
        border-radius: 23px;
        box-shadow: 0 0 7px 1px #babbbb;
        position: absolute;
    }

    .init{
        transform: translate(-10%,-53%) perspective(900px) rotateY(44deg) scale(.8); opacity: 0
    }
    
</style>

// -- =====================================================================================
