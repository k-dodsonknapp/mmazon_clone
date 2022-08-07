import React from 'react'
import { NavLink } from 'react-router-dom';
import FullCard from '../FullCard';
import MiniGrid from '../MiniGrid';
import './mainPage.css'

function MainPage() {

    const miniGridTwoHeading = "Most-loved picks"
    const miniGridOneHeading = "Everything for college"
    const miniGridThreeHeading = "Back to School"
    const miniGridFourHeading = "Supplies for all grades"

    const fullCardHeadingOne = "Top Deal"
    const fullCardHeadingTwo = "Customers' most-loved deals"
    const fullCardHeadingThree = "Best dresses at Shopbop"

    const miniGridOneImages = [
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/OTC/GW/Quad/DES/quad_gethteessentials_desk_1x._SY116_CB634106900_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/OTC/GW/Quad/DES/quad_fanshop_desk_1x._SY116_CB634106900_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/OTC/GW/Quad/DES/quad_findyourtech_desk_1x._SY116_CB634106900_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/OTC/GW/Quad/DES/quad_shopthelook_desk_1x._SY116_CB634106900_.jpg'
    ]

    const miniGridTwoImages = [
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_W_Fashion_DT_NW_1x._SY116_CB636783951_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_M_Fashion_DT_SE_1x._SY116_CB636783951_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_Beauty_DT_NE_1x._SY116_CB636783951_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/QuadCard/CML_SP22_GW_QC_DealsV2_HomeKitchen_DT_SW_1x._SY116_CB636783951_.jpg'
    ]

    const miniGridThreeImages = [
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_Deal_desk_1x._SY116_CB632575306_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_SchoolEssentials_desk_1x._SY116_CB633224176_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_CML_desk_1x._SY116_CB632575306_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_SchoolSupplies_desk_1x._SY116_CB632637892_.jpg'
    ]

    const miniGridFourImages = [
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_PreKto2_desk_1x._SY116_CB632794662_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_3to6_desk_1x._SY116_CB632794662_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_7to8_desk_1x._SY116_CB632794662_.jpg',
        'https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/BTSOTC/BTS/GW/QuadCards/DES/BTS_PH2_Quad_9to12_desk_1x._SY116_CB632794662_.jpg'
    ]

    const fullCardImageOne = "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics/XCM_CUTTLE_1453486_2476926_379x304_1X_en_US._SY304_CB631939753_.jpg"
    const fullCardImageTwo = "https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/CML/SpringFlip/GW/Wave2/CategoryCard/CML_SP22_Deals_CC_DT_1x._SY304_CB636853462_.jpg"
    const fullCardImageThree = "https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2021/CategoryCards/mp_20220808_easydress_desktopsinglecategory_desktop_379x304._SY304_CB630967609_.jpg"


    const panelTextOne = [
        "Get the essentials",
        "Fan shop",
        "Find your tech",
        "Shop the look"
    ]
    const panelTextTwo = [
        "Women's fashion",
        "Men's fashion",
        "Beauty",
        "Home and Kitchen"
    ]

    const panelTextThree = [
        "Deals",
        "Essentials",
        "Most-loved picks",
        "Supplies"
    ]

    const panelTextFour = [
        "Pre-K - 2nd Grade",
        "Grades 3-6",
        "Grades 7-8",
        "Grades 9-12"
    ]

    const linkTextOne = "Shop All"
    const linkTextTwo = "Shop All"
    const linkTextThree = "Shop All"
    const linkTextFour = "Shop All"
    const fullCardLinkTextOne = "See all deals"
    const fullCardLinkTextTwo = "See deals on 4+ star favorites"
    const fullCardLinkTextThree = "See the full edit from Shopbop"

    return (
        <div id='main-page'>

            <div className='grid-container'>
                <div className='grid-item'>
                    <MiniGrid
                        heading={miniGridOneHeading}
                        panelImages={miniGridOneImages}
                        panelText={panelTextOne}
                        link={linkTextOne}
                    />
                </div>
                <div className='grid-item'>
                    <MiniGrid
                        heading={miniGridTwoHeading}
                        panelImages={miniGridTwoImages}
                        panelText={panelTextTwo}
                        link={linkTextTwo}
                    />
                </div>
                <div className='grid-item'>
                    <FullCard 
                    heading={fullCardHeadingOne}
                    link={fullCardLinkTextOne}
                    image={fullCardImageOne}
                    />
                </div>
                <div className='grid-item'>

                </div>
                <div className='grid-item'>
                <FullCard 
                    heading={fullCardHeadingTwo}
                    link={fullCardLinkTextTwo}
                    image={fullCardImageTwo}
                    />
                </div>
                <div className='grid-item'>
                <FullCard 
                    heading={fullCardHeadingThree}
                    link={fullCardLinkTextThree}
                    image={fullCardImageThree}
                    />
                </div>
                <div className='grid-item'>
                    <MiniGrid
                        heading={miniGridThreeHeading}
                        panelImages={miniGridThreeImages}
                        panelText={panelTextThree}
                        link={linkTextThree}
                    />
                </div>
                <div className='grid-item'>
                    <MiniGrid
                        heading={miniGridFourHeading}
                        panelImages={miniGridFourImages}
                        panelText={panelTextFour}
                        link={linkTextFour}
                    />
                </div>
                <div className='grid-item-big'></div>
            </div>

        </div>
    )
}

export default MainPage;