import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Home extends React.Component {
  render() {
    return (
      <Card style={{ width: 500, margin: 10 }}>
        <CardContent>
          <h1 style={{textAlign: 'center'}}>Home</h1>
        </CardContent>
      </Card>
    )
  }
}
export default Home