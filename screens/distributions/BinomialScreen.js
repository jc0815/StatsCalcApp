import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Form, Label, Input, Item } from "native-base";
import math from 'mathjs';


export default class BinomialScreen extends React.Component {
    constructor() {
        super();
        this.state = { calculate: false, probability: 0 , trials: 0 , success: 0 };
    }

    calculatePressed = () => {
        this.setState({ calculate: true });
    }

    calculateBinomial(probability, trial, success) {
        var p = parseFloat(probability);
        var t = parseInt(trial);
        var s = parseInt(success);
        return math.combinations(t, s) 
            * math.pow(p, s)
            * math.pow((1 - p), (t-s));
    } 

    calculateBinomialGreater(probability, trial, success) {
        var p = parseFloat(probability);
        var t = parseInt(trial);
        var s = parseInt(success);
        var finalValue = 0;
        for (i = s + 1; i < t; i++) {
            finalValue += this.calculateBinomial(p, t, i);
        }
        return finalValue;
    }
    calculateBinomialLess(probability, trial, success) {
        var p = parseFloat(probability);
        var t = parseInt(trial);
        var s = parseInt(success);
        var finalValue = 0;
        for (i = s - 1; i >= 0; i--) {
            finalValue += this.calculateBinomial(p, t, i);
        }
        return finalValue;
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
                                Binomial distribution is ....
                                Lorem ipsum dolor sit amet, legimus prodesset ullamcorper et eam, 
                                viris ornatus intellegat eu duo. Pro duis quaerendum ea. Sea no esse eligendi incorrupte, e
                                am at eros velit. Vim an primis appellantur, atqui epicuri an eos. 
                                No sea amet elitr. Nec suas menandri voluptaria cu.
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Item floatingLabel style={{marginTop: 10}}>
                                <Label>Probability of success on one trial</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} onChangeText={(probability) => this.setState({probability})}/>
                            </Item>
                            <Item floatingLabel style={{marginTop: 10}}>
                                <Label>Number of trials</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} keyboardType="decimal-pad" onChangeText={(trials) => this.setState({trials})}/>
                            </Item>
                            <Item floatingLabel style={{marginTop: 10}}>
                                <Label>Number of successes</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} keyboardType="decimal-pad" onChangeText={(success) => this.setState({success})}/>
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
                                <Text>{greaterThanEqual} {this.calculateBinomialGreater(this.state.probability, this.state.trials, this.state.success)+ this.calculateBinomial(this.state.probability, this.state.trials, this.state.success)}</Text>
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