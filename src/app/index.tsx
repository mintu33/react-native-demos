import { View, Text, Button } from 'react-native'
import React from 'react'
import NameComponent from '../components/NameComponent'
import AgeComponent from '../components/AgeComponent'
import XHandleComponent from '../components/XHandleComponent'
import FavSubjectComponent from '../components/FavSubjectComponent'
import ImageComponent from '../components/ImageComponent'
import ProfileCardComponent from '../components/ProfileCardComponent'
import DynamicContentComponent from '../components/DynamicContentComponent'
import CarComponent from '../components/CarComponent'
import ListData from '../components/ListData'
import ArrayOfObject from '../components/ArrayOfObject'
import Products from '../components/Products'
import Students from '../components/Students'
import ParentComponent from '../components/ParentComponent'

const Index = () => {
  return (
    <View>
      {/* <ParentComponent/> */}
      {/* <Students/> */}
      <Products/>
      {/* <ArrayOfObject/> */}
      {/* <ListData/> */}
      {/* <CarComponent/> */}
      {/* <DynamicContentComponent /> */}
      {/* <ProfileCardComponent /> */}
      {/* <ImageComponent /> */}
      {/* <NameComponent />
      <AgeComponent />
      <XHandleComponent />
      <FavSubjectComponent /> */}
    </View>
  )
}

export default Index