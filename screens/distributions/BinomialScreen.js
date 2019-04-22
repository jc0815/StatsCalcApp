import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, Form, Label, Input, Item } from "native-base";

export default class BinomialScreen extends React.Component {
  render() {
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
                                <Input />
                            </Item>
                            <Item floatingLabel style={{marginTop: 10}}>
                                <Label>Number of trials</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel style={{marginTop: 10}}>
                                <Label>Number of successes</Label>
                                <Input />
                            </Item>
                        </Body>
                    </CardItem>
                    <CardItem footer bordered>
                        <Text>Calculate</Text>
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