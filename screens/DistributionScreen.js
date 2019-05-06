import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';

export default class DistributionScreen extends React.Component {
  render() {
    return (
        <Container>
            <Header />
            <Content>
                <Separator bordered>
                    <Text>Continuous Distributions</Text>
                </Separator>
                <ListItem>
                    <Text>Uniform</Text>
                </ListItem>
                <ListItem>
                    <Text>Exponential</Text>
                </ListItem>
                <ListItem>
                    <Text>Gamma</Text>
                </ListItem>
                <ListItem last>
                    <Text>Normal</Text>
                </ListItem>

                <Separator bordered>
                    <Text>Discrete Distributions</Text>
                </Separator>
                <ListItem onPress={() => this.props.navigation.navigate('BinomialScreen')}>
                    <Text>Binomial</Text>
                </ListItem>
                <ListItem>
                    <Text>Negative Binomial</Text>
                </ListItem>
                <ListItem>
                    <Text>Hypergeometric</Text>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('PoissonScreen')}>
                    <Text>Poisson</Text>
                </ListItem>
                <ListItem last>
                    <Text>Geometric</Text>
                </ListItem>
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