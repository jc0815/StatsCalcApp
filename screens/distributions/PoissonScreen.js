import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Form, Label, Input, Item, Icon } from "native-base";
import math from 'mathjs';


export default class PoissonScreen extends React.Component {
    constructor() {
        super();
        this.state = { 
            calculate: false,
            variableInputError: false,
            rateInputError: false,
            variable: 0 , 
            rate: 0 
        };
    }

    calculatePressed = () => {
        this.state.calculate = false;
        this.state.variableInputError = false;
        this.state.rateInputError = false;
        if (this.state.variable < 0 || this.state.variable % 1 != 0  || isNaN(this.state.variable)) {
            this.setState({ variableInputError: true})
        } else if (this.state.rate < 0 || isNaN(this.state.trials)) {
            this.setState({ variableInputError: false, rateInputError: true})
        } else {
            this.setState({ calculate: true, variableInputError: false, rateInputError: false});
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
                        <Text style={{color: 'blue'}}>Poisson Distribution</Text>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Text>
                                The Poisson distribution is the discrete probability distribution of the number of events occurring in a given time period, given the average number of times the event occurs over that time period.
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem bordered>
                        <Body>
                            <Item floatingLabel error={this.state.variableInputError} style={{marginTop: 10}}>
                                <Label>Poisson random variable (x)</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} onChangeText={(variable) => this.setState({variable})}/>
                                {this.state.variableInputError? <Icon name='close-circle' /> : null }
                            </Item>
                            <Item floatingLabel error={this.state.rateInputError} style={{marginTop: 10}}>
                                <Label>Average rate of success</Label>
                                <Input keyboardType={Platform.OS === "ios"? "numeric":"decimal-pad"} keyboardType="decimal-pad" onChangeText={(rate) => this.setState({rate})}/>
                                {this.state.rateInputError? <Icon name='close-circle' /> : null }
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