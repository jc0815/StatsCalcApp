import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Form, Label, Input, Item, Icon } from "native-base";
import math from 'mathjs';


export default class GeometricScreen extends React.Component {
    constructor() {
        super();
        this.state = { 
            calculate: false,
            probInputError: false,
            trialInputError: false,
            probability: 0 , 
            trials: 0 , 
        };
    }

    calculatePressed = () => {
        this.state.calculate = false;
        this.state.probInputError = false;
        this.state.trialInputError = false;
        this.state.successInputError = false;
        if (this.state.probability < 0 || this.state.probability > 1 || isNaN(this.state.probability || this.state.probability == "")) {
            this.setState({ probInputError: true})
        } else if (this.state.trials < 0 || this.state.trials % 1 != 0 || isNaN(this.state.trials || this.state.trials == "")) {
            this.setState({ probInputError: false, trialInputError: true})
        } else {
            this.setState({ calculate: true, probInputError: false, trialInputError: false, successInputError: false});
        }
    }

    calculateGeometric(probability, trial) {
        if (this.state.calculate) {
            var p = parseFloat(probability);
            var t = parseInt(trial);
            if (this.state.calculate) {
                return math.pow((1-p), (t-1)) * p;
            }
        }
    } 

    calculateGeometricGreater(probability, trial) {
        if (this.state.calculate) {
            var p = parseFloat(probability);
            var t = parseInt(trial);
            return 1 - (this.calculateGeometricLess(p,t) + this.calculateGeometric(p,t));
        }
    }
    calculateGeometricLess(probability, trial) {
        if (this.state.calculate) {
            var p = parseFloat(probability);
            var t = parseInt(trial);
            var finalValue = 0;
            for (i = 1; i < t; i++) {
                finalValue += this.calculateGeometric(p, i);
            }

            return finalValue;
        }
    }


  render() {
      var equal = "P(X = x): ";
      var lessThan = "P(X < x): ";
      var lessThanEqual = "P(X <= x): ";
      var greaterThan = "P(X > x): ";
      var greaterThanEqual = "P(X >= x): ";
    return (
        <Container>
            {/* <Header /> */}
            <Content padder>
                <Card>
                    <CardItem header bordered style={{flexDirection: 'column'}}>
                        <Text style={{color: 'blue'}}>Geometric Distribution</Text>
                        <Text style={{color: 'black'}}>X ~ Geom(p)</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                                The geometric distribution is the discrete probability of the first success on the X number of trials.
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Item floatingLabel error={this.state.probInputError} style={{marginTop: 10}}>
                                <Label>Probability of success on one trial</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} onChangeText={(probability) => this.setState({probability})}/>
                                {this.state.probInputError? <Icon name='close-circle' /> : null }
                            </Item>
                            <Item floatingLabel error={this.state.trialInputError} style={{marginTop: 10}}>
                                <Label>Number of trials</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} keyboardType="decimal-pad" onChangeText={(trials) => this.setState({trials})}/>
                                {this.state.trialInputError? <Icon name='close-circle' /> : null }
                            </Item>
                        </Body>
                    </CardItem>

                    {this.state.calculate?
                        <CardItem bordered>
                            <Body>
                                <Text>{equal} {this.calculateGeometric(this.state.probability, this.state.trials)}</Text>
                                <Text>{lessThan} {this.calculateGeometricLess(this.state.probability, this.state.trials)}</Text>
                                <Text>{lessThanEqual} {this.calculateGeometricLess(this.state.probability, this.state.trials) + this.calculateGeometric(this.state.probability, this.state.trials)}</Text>
                                <Text>{greaterThan} {this.calculateGeometricGreater(this.state.probability, this.state.trials)}</Text>
                                <Text>{greaterThanEqual} {this.calculateGeometricGreater(this.state.probability, this.state.trials) + this.calculateGeometric(this.state.probability, this.state.trials)}</Text>
                            </Body>
                        </CardItem>
                    :null}

                    <CardItem footer bordered>
                        <TouchableOpacity onPress={() => this.calculatePressed() } ><Text>Calculate</Text></TouchableOpacity>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});