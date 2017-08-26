import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export default class LoginMobile extends Component {

  anim = new Animated.Value(0);

  componentDidMount() {
    this.runAnimation();
  }

  runAnimation() {
    this.anim.setValue(0);
    Animated
      .timing(this.anim, { toValue: 1, duration: 2000 })
      .start(() => this.runAnimation());
  }

  render() {

    const variety = {
      original: {
        body: '#e6a564',
        bodyInside: '#F0BE78',
        stroke: '#323246',
        tail: '#BE8250',
        eye: '#323246',
        ass: '#323246',
        assBackground: '#e6a564',
      },
      black: {
        body: '#000000',
        bodyInside: '#000000',
        stroke: '#323246',
        tail: '#000000',
        eye: '#e0ef3b',
        ass: '#000000',
        assBackground: '#000000',
      },
      white: {
        body: '#ffffff',
        bodyInside: '#ffffff',
        stroke: '#323246',
        tail: '#ffffff',
        eye: '#323246',
        ass: '#ffffff',
        assBackground: '#ffffff',
      }
    }

    let color = variety.original;
    if (this.props.variety in variety) {
      color = variety[this.props.variety];
    }

    const width = 250;
    const height = 250;

    const styles = StyleSheet.create({
      viewport: {
        width,
        height,
        backgroundColor: color.bgColor,
      },
      catWrap: {
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
      },
      catHead: {
        position: 'absolute',
        top: height / 2 - 30,
        right: 0,
        width: 60,
        height: 30,
        borderColor: color.stroke,
        borderWidth: 5,
        borderBottomWidth: 0,
        backgroundColor: color.body,
      },
      catLeftEar: {
        position: 'absolute',
        top: -15,
        left: -5,
        width: 17,
        height: 15,
        borderColor: color.stroke,
        borderWidth: 5,
        borderBottomWidth: 0,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 2,
        backgroundColor: color.body,
      },
      catRightEar: {
        position: 'absolute',
        top: -15,
        right: -5,
        width: 17,
        height: 15,
        borderColor: color.stroke,
        borderWidth: 5,
        borderBottomWidth: 0,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 2,
        backgroundColor: color.body,
      },
      catLeftEye: {
        position: 'absolute',
        top: 10,
        left: 11,
        width: 5,
        height: 6,
        borderRadius: 5,
        backgroundColor: color.eye,
      },
      catRightEye: {
        position: 'absolute',
        top: 10,
        right: 11,
        width: 5,
        height: 6,
        borderRadius: 5,
        backgroundColor: color.eye,
      },
      catBeardWrap: {
        position: 'absolute',
        top: 15,
        height: 3,
        width: 3,
      },
      catBeardLeftWrap: {
        left: 0,
      },
      catBeardRightWrap: {
        right: 0,
        transform: [{ rotate: '180deg' }],
      },
      catBeard: {
        position: 'absolute',
        top: 0,
        left: -10,
        height: 3,
        width: 15,
        borderRadius: 15,
        backgroundColor: color.stroke,
      },
      catTopBeard: {
        top: -5,
        transform: [{ rotate: '5deg' }],
      },
      catBottomBeard: {
        top: 5,
        transform: [{ rotate: '-5deg' }],
      },
      catHand: {
        position: 'absolute',
        width: 18,
        height: 30,
        borderWidth: 5,
        borderColor: color.stroke,
        borderTopWidth: 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        backgroundColor: color.body,
        transform: [{ rotate: '5deg' }],
      },
      catHandLeft: {
        right: 1,
        top: height / 2,
      },
      catHandRight: {
        right: 60 - 18 + 1,
        top: height / 2,
      },
      catBodyMask: {
        position: 'absolute',
        width,
        height,
        top: height / 2,
        left: width / 2,
        overflow: 'hidden',
      },
      catBodyMaskContent: {
        position: 'absolute',
        width,
        height,
        top: -(height / 2),
        left: -(width / 2),
      },
      catBody: {
        position: 'absolute',
        width,
        height,
        borderWidth: 60,
        borderColor: color.body,
        borderRadius: 250,
      },
      catBodyInside: {
        position: 'absolute',
        top: 15,
        left: 15,
        width: width - 30,
        height: height - 30,
        borderWidth: 30,
        borderColor: color.bodyInside,
        borderRadius: 250,
      },
      catBodyLeft: {
        position: 'absolute',
        top: 55,
        left: 55,
        width: width - 110,
        height: width - 110,
        borderWidth: 5,
        borderColor: color.stroke,
        borderRadius: 250,
      },
      catBodyRight: {
        position: 'absolute',
        width,
        height,
        borderWidth: 5,
        borderColor: color.stroke,
        borderRadius: 250,
      },
      catFoot: {
        position: 'absolute',
        top: height / 2,
        right: 0,
        width: 60,
      },
      catLeg: {
        position: 'absolute',
        width: 24,
        height: 30,
        borderWidth: 5,
        borderColor: color.stroke,
        borderTopWidth: 0,
        backgroundColor: color.body,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
      catLegLeft: {
        left: 0,
      },
      catLegRight: {
        right: 0,
      },
      catAss: {
        position: 'absolute',
        width: 20,
        height: 10,
        left: 20,
        borderWidth: 5,
        borderColor: color.ass,
        borderTopWidth: 0,
        backgroundColor: color.assBackground,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
      },
      catTail: {
        position: 'absolute',
        width: 16,
        height: 38,
        top: 8,
        left: 22,
        borderWidth: 5,
        borderColor: color.stroke,
        borderTopWidth: 0,
        backgroundColor: color.tail,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      },
    });

    const headAnim = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['40deg', '-320deg'],
    });

    const bodyAnim = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['40deg', '-320deg'],
    });

    const handAnim = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['50deg', '-310deg'],
    });

    const footAnim = this.anim.interpolate({
      inputRange: [0, 1],
      outputRange: ['130deg', '-230deg'],
    });

    return (
      <View style={styles.viewport}>
        <Animated.View style={[styles.catWrap, { transform: [{ rotate: bodyAnim }] }]}>
          <View style={styles.catBodyMask}>
            <View style={styles.catBodyMaskContent}>
              <View style={styles.catBody}></View>
              <View style={styles.catBodyInside}></View>
              <View style={styles.catBodyLeft}></View>
              <View style={styles.catBodyRight}></View>
            </View>
          </View>
        </Animated.View>
        <Animated.View style={[styles.catWrap, { transform: [{ rotate: headAnim }] }]}>
          <View style={styles.catHead}>
            <View style={styles.catLeftEar}></View>
            <View style={styles.catRightEar}></View>
            <View style={styles.catLeftEye}></View>
            <View style={styles.catRightEye}></View>
            <View style={[styles.catBeardWrap, styles.catBeardLeftWrap]}>
              <View style={[styles.catBeard, styles.catTopBeard]}></View>
              <View style={styles.catBeard}></View>
              <View style={[styles.catBeard, styles.catBottomBeard]}></View>
            </View>
            <View style={[styles.catBeardWrap, styles.catBeardRightWrap]}>
              <View style={[styles.catBeard, styles.catTopBeard]}></View>
              <View style={styles.catBeard}></View>
              <View style={[styles.catBeard, styles.catBottomBeard]}></View>
            </View>
          </View>
        </Animated.View>
        <Animated.View style={[styles.catWrap, { transform: [{ rotate: handAnim }] }]}>
          <View style={[styles.catHand, styles.catHandLeft]}></View>
          <View style={[styles.catHand, styles.catHandRight]}></View>
        </Animated.View>
        <Animated.View style={[styles.catWrap, { transform: [{ rotate: footAnim }] }]}>
          <View style={styles.catFoot}>
            <View style={[styles.catLeg, styles.catLegLeft]}></View>
            <View style={[styles.catLeg, styles.catLegRight]}></View>
            <View style={styles.catTail}></View>
            <View style={styles.catAss}></View>
          </View>
        </Animated.View>
      </View>
    );
  }
}
