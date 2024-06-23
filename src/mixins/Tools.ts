import * as TS                              from '@/types/types'
import * as Anime                           from '@/mixins/AnimationCenter'
import { useStore }                         from 'vuex'
import { Ref }                              from 'vue';

const store = useStore();

// -- =====================================================================================

// eslint-disable-next-line
export const mainCA = ( [ oV, nV, ort ]: TS.Orts[], [X100,X010]: Ref<HTMLElement>[] ) => {
    if ( nV !== oV )
        if ( [ oV, nV ].includes( ort ) )
            Anime.MainTransition( nV === ort ? "In" : "Out", [ X100, X010 ] )
}

// -- =====================================================================================

// eslint-disable-next-line
export const reg_Phase_A = ( phase: "In"|"Out", XReg: Ref<HTMLElement> ) => {
    Anime.regSlider( phase, XReg )
}

// -- =====================================================================================
