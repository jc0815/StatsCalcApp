import React from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Form, Label, Input, Item, Icon, Textarea } from "native-base";
import math from 'mathjs';


export default class PoissonScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            finalMean: 0,
            calculate: false
        };
    }

    calculatePressed = () => {
        this.setState({ calculate: true });
        input = this.state.userInput;
        nums = input.split(/,| /);
        var filtered = nums.filter(function (el) {
            return (el != null) && (el != parseInt(0) && (el != ""));
        });

        // for debugging:
        // console.log(filtered);
        // console.log(math.mean(filtered));
        if (filtered === null) {
            this.setState({ finalMean: math.mean(filtered) });
        } else {
            this.setState({ finalMean: 0 });
        }

    }


    render() {
        return (
            <Container>
                {/* <Header /> */}
                <Content padder>
                    <Card>
                        <CardItem header bordered style={{ flexDirection: 'column' }}>
                            <Text style={{ color: 'blue' }}>Mean / Average</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                    Enter a list of values, each number can be seaprated by either a spacing or comma:
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem bordered>
                            <Body style={styles.textAreaContainer}>
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="1.2, 3, 5.3, 7"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                    onChangeText={(userInput) => this.setState({ userInput })}
                                />
                            </Body>
                        </CardItem>

                        <CardItem footer bordered>
                            <TouchableOpacity onPress={() => this.calculatePressed()} ><Text>Calculate</Text></TouchableOpacity>
                        </CardItem>

                        {this.state.calculate ?
                            <CardItem bordered>
                                <Body>
                                    <Text>{"Mean: "} {this.state.finalMean}</Text>
                                </Body>
                            </CardItem>
                            : null}

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
    form: {
        width: '100%',
    },
    textAreaContainer: {
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        flex: 3,
        height: 150,
        alignItems: 'flex-start',
        justifyContent: "flex-start"
    }
});