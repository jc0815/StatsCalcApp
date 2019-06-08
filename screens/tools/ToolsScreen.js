import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, FooterTab, Icon, Button, Footer} from 'native-base';

// this class is deprecated ....
export default class ToolsScreen extends React.Component {
    static navigationOptions = {
        title: 'Tools',
        headerLeft: null,
        transitionConfig: () => ({
            transitionSpec: {
              duration: 0, 
            },
          }),
      };
  render() {
    return (
        <Container>
            <Content>
                <Separator bordered>
                    <Text>Basic</Text>
                </Separator>
                <ListItem>
                    <Text>Mean</Text>
                </ListItem>
                <ListItem>
                    <Text>Standard deviation</Text>
                </ListItem>
                <ListItem last>
                    <Text>Random Number Generator</Text>
                </ListItem>

                <Separator bordered>
                    <Text>Statistics Tools</Text>
                </Separator>
                <ListItem onPress={() => this.props.navigation.navigate('BinomialScreen')}>
                    <Text>Bayes'</Text>
                </ListItem>
                <ListItem>
                    <Text>Factorial</Text>
                </ListItem>
                <ListItem>
                    <Text>Combinations</Text>
                </ListItem>
                <ListItem onPress={() => this.props.navigation.navigate('PoissonScreen')} last>
                    <Text>Permutations</Text>
                </ListItem>
            </Content>
            <Footer>
                <FooterTab >
                    <Button vertical onPress={() => this.props.navigation.navigate('DistributionScreenNoTransition')}>
                        <Icon name="ios-stats" />
                        <Text>Distributions</Text>
                    </Button>
                    <Button vertical active>
                        <Icon name="calculator" />
                        <Text>Tools</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="settings" />
                        <Text>Settings</Text>
                    </Button>
                </FooterTab>
            </Footer>
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