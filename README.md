# counterApp

<--- Mounting Life Cycle Sequence --->

  1) Parent constructor called
  2) Parent getDerivedStateFromProps called
  3) Parent render called
  4) Child constructor called
  5) Child getDerivedStateFromProps called
  6) Child render called
  7) Child componentDidMount called
  8) Parent componentDidMount called


<--- Updating Life Cycle Sequence --->

  1) Parent getDerivedStateFromProps called
  2) Parent shouldComponentUpdate called
  3) Parent render called
  4) Child getDerivedStateFromProps called
  5) Child shouldComponentUpdate called
  6) Child render called
  7) Child getSnapshotBeforeUpdate called
  8) Parent getSnapshotBeforeUpdate called
  9) Child componentDidUpdate called
  10) Parent componentDidUpdate called


<--- Unmounting Life Cycle Sequence --->

  1) componentwillUnmount() ---> method is invoked immediately before a component is unmounted and destroyed.


ScreenShots :

1) IPhone view :

<img width="370" alt="Screenshot 2021-10-10 at 10 43 45 PM" src="https://user-images.githubusercontent.com/62723964/136707333-02b34c3f-d6cb-4aee-a50d-d80b75cce773.png">


2) Android view :

<img width="346" alt="Screenshot 2021-10-10 at 10 45 40 PM" src="https://user-images.githubusercontent.com/62723964/136707361-c54d176e-6f13-4362-8371-bc23fe954d1f.png">


Output : 

<--- Mounting Life Cycle Sequence --->

<img width="524" alt="Screenshot 2021-10-10 at 10 47 33 PM" src="https://user-images.githubusercontent.com/62723964/136707423-aa85c171-873e-46ca-a821-68f49240e373.png">


<--- Updating Life Cycle Sequence --->

<img width="524" alt="Screenshot 2021-10-10 at 10 48 07 PM" src="https://user-images.githubusercontent.com/62723964/136707466-e180fe9e-2d40-4744-a0ad-daacbd79d2b3.png">
