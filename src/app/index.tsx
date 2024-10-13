import { View, Text, Button } from 'react-native'
import React from 'react'
import NameComponent from '../components/NameComponent'
import AgeComponent from '../components/AgeComponent'
import XHandleComponent from '../components/XHandleComponent'
import FavSubjectComponent from '../components/FavSubjectComponent'
import ImageComponent from '../components/ImageComponent'
import ProfileCardComponent from '../components/ProfileCardComponent'
import DynamicContentComponent from '../components/DynamicContentComponent'

const Index = () => {
  return (
    <View>
      <DynamicContentComponent />
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