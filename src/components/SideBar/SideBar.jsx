import React from "react";
import Titlecomp from "../Titlecomp/Titlecomp";
import "./SideBar.css"
/* import Slider  from 'rc-slider'; */
/* const {createSliderWithTooltip }=Slider;
const Range = createSliderWithTooltip(Slider.Range); */
import Slider from 'rc-slider';
import RangeSlider from "../RangeSlider/RangeSilder";

const SideBar=()=>{
    const [isSelected,setIsSelected]=React.useState({
        VTT:false,
        VTC:false,
        ELECTRIC:false,
        AUTRE_Cat:false,
        L:false,
        XL:false,
        S:false,
        M:false,
        TTIAN:false,
        CARBONE:false,
        ALUMINIUM:false,
        AUTRE_Mat:false
    })
    const handleClick=e=>{
        const {name,checked}=e.target
        console.log(name)
       setIsSelected(prevFormData => ({
        ...prevFormData,
        [name]:checked
    }))
    }
     
    return(
        <div className="SideBar-wrapper">
            <div className="sideBar_Cell">
                <Titlecomp title="Prix"/>
              <RangeSlider
              />
            </div>
            <div className="sideBar_Cell">
                <Titlecomp title="Categorie"/>
                <div className="Sidebar_cellDetail">
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="VTT"
                        id="VTT"
                    /><label
                        htmlFor="VTT"
                        className={`${isSelected.VTT?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                    >VTT</label>
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="VTC"
                        id="VTC"
                    /><label
                        htmlFor="VTC"
                        className={`${isSelected.VTC?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                    >VTC</label>
                    <input type="checkbox"
                        onClick={(e)=>{handleClick(e)}}
                        name="ELECTRIC"
                        id="ELECTRIC"
                    /><label
                        className={`${isSelected.ELECTRIC?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                        htmlFor="ELECTRIC"
                        >ELECTRIC</label>
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="AUTRE_Cat"
                        id="AUTRE_Cat"
                    /><label
                        className={`${isSelected.AUTRE_Cat?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                        htmlFor="AUTRE_Cat"
                    >AUTRE</label>
                </div>
            </div>
            <div className="sideBar_Cell">
                <Titlecomp title="Taille"/>
                <div className="Sidebar_cellDetail">
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="L"
                        id="L"
                    /><label
                        className={`${isSelected.L?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                        htmlFor="L"
                    >L</label>
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="M"
                        id="M"
                    /><label
                        htmlFor="M"
                        className={`${isSelected.M?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                    >M</label>
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="S"
                        id="S"
                    /><label
                        className={`${isSelected.S?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                        htmlFor="S"
                    >S</label>   
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="XL"
                        id="XL"
                    /><label
                        className={`${isSelected.XL?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                        htmlFor="XL"
                    >XL</label>
                </div>
            </div>
            <div className="sideBar_Cell">
                <Titlecomp title="Matiére principale"/>
                <div className="Sidebar_cellDetail">
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="TITAN"
                        id="TITAN"
                    /><label
                    className={`${isSelected.TTIAN?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                    htmlFor="TITAN"
                    >TITAN</label>
                    <input type="checkbox" 
                        onClick={(e)=>{handleClick(e)}}
                        name="ALUMINIUM"
                        id="ALUMINIUM"
                    /><label
                    htmlFor="ALUMINIUM"
                    className={`${isSelected.ALUMINIUM?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                    >ALUMINIUM</label>
                    <input type="checkbox"
                        name="CARBONE"
                        id="CARBONE"
                        onClick={(e)=>{handleClick(e)}}
                        /><label 
                        htmlFor="CARBONE"
                        className={`${isSelected.CARBONE?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                    >CARBONE</label>
                    <input type="checkbox"
                        name="AUTRE_Mat"
                        id="AUTRE_Mat"
                        onClick={(e)=>{handleClick(e)}}
                        /><label
                        className={`${isSelected.AUTRE_Mat?"sideBar_selectedItem":"sideBar_noneSelectedItem"}`}
                        htmlFor="AUTRE_Mat"
                    >AUTRE</label>
                </div>
            </div>
        </div>
    )
}

export default SideBar;