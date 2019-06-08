import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Separator, FooterTab, Icon, Button, Footer} from 'native-base';

export default class DistributionScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            distributionTapped: true,
        }
    }
    static navigationOptions = {
        // title: this.state.distributionTapped ? 'Distributions' : 'Tools',
        title: 'Statistics Calculator',
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
            {/* <Header /> */}
            {this.state.distributionTapped ? 
            
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
            :
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
            }
            <Footer>
                <FooterTab >
                    <Button vertical active={this.state.distributionTapped} onPress={() => this.setState({distributionTapped: true})}>
                        <Icon name="ios-stats" />
                        <Text>Distributions</Text>
                    </Button>
                    <Button vertical active={!this.state.distributionTapped} onPress={() => this.setState({distributionTapped: false})}> 
                    {/* onPress={() => this.props.navigation.navigate('ToolsScreenNoTransition')} */}
                        <Icon name="calculator" />
                        <Text>Tools</Text>
                    </Button>
                    {/* <Button vertical>
                        <Icon name="settings" />
                        <Text>Settings</Text>
                    </Button> */}
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