import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Form, Label, Input, Item, Icon } from "native-base";
import math from 'mathjs';


export default class BinomialScreen extends React.Component {
    constructor() {
        super();
        this.state = { 
            calculate: false,
            probInputError: false,
            trialInputError: false,
            successInputError: false,
            probability: 0 , 
            trials: 0 , 
            success: 0 
        };
    }

    calculatePressed = () => {
        this.state.calculate = false;
        this.state.probInputError = false;
        this.state.trialInputError = false;
        this.state.successInputError = false;
        if (this.state.probability < 0 || this.state.probability > 1 || isNaN(this.state.probability)) {
            this.setState({ probInputError: true})
        } else if (this.state.trials < 0 || this.state.trials % 1 != 0 || isNaN(this.state.trials)) {
            this.setState({ probInputError: false, trialInputError: true})
        } else if (this.state.success < 0 || this.state.success % 1 != 0 || isNaN(this.state.success) || parseInt(this.state.success) > parseInt(this.state.trials)) {
            this.setState({ probInputError: false, trialInputError: false, successInputError: true})
        } else {
            this.setState({ calculate: true, probInputError: false, trialInputError: false, successInputError: false});
        }
    }

    calculateBinomial(probability, trial, success) {
        if (this.state.success < this.state.trials && this.state.calculate) {
            var p = parseFloat(probability);
            var t = parseInt(trial);
            var s = parseInt(success);
            if (this.state.calculate) {
                return math.combinations(t, s)
                    * math.pow(p, s)
                    * math.pow((1 - p), (t - s));
            }
        }
    } 

    calculateBinomialGreater(probability, trial, success) {
        if (this.state.success < this.state.trials && this.state.calculate) {
            var p = parseFloat(probability);
            var t = parseInt(trial);
            var s = parseInt(success);
            var finalValue = 0;
            for (i = s + 1; i < t; i++) {
                finalValue += this.calculateBinomial(p, t, i);
            }
            return finalValue;
        }
    }
    calculateBinomialLess(probability, trial, success) {
        if (this.state.success < this.state.trials && this.state.calculate) {
            var p = parseFloat(probability);
            var t = parseInt(trial);
            var s = parseInt(success);
            var finalValue = 0;
            for (i = s - 1; i >= 0; i--) {
                finalValue += this.calculateBinomial(p, t, i);
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
            <Header />
            <Content padder>
                <Card>
                    <CardItem header bordered>
                        <Text style={{color: 'blue'}}>Binomial Distribution</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                                The binomial distribution is the discrete probability of successes out ot independent Bernoulli trials.
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
                            <Item floatingLabel error={this.state.successInputError} style={{marginTop: 10}}>
                                <Label>Number of successes</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} keyboardType="decimal-pad" onChangeText={(success) => this.setState({success})}/>
                                {this.state.successInputError? <Icon name='close-circle' /> : null }
                            </Item>
                        </Body>
                    </CardItem>

                    {this.state.calculate?
                        <CardItem bordered>
                            <Body>
                                <Text>{equal} {this.calculateBinomial(this.state.probability, this.state.trials, this.state.success)}</Text>
                                <Text>{lessThan} {this.calculateBinomialLess(this.state.probability, this.state.trials, this.state.success)}</Text>
                                <Text>{lessThanEqual} {this.calculateBinomialLess(this.state.probability, this.state.trials, this.state.success) + this.calculateBinomial(this.state.probability, this.state.trials, this.state.success)}</Text>
                                <Text>{greaterThan} {this.calculateBinomialGreater(this.state.probability, this.state.trials, this.state.success)}</Text>
                                <Text>{greaterThanEqual} {this.calculateBinomialGreater(this.state.probability, this.state.trials, this.state.success) + this.calculateBinomial(this.state.probability, this.state.trials, this.state.success)}</Text>
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