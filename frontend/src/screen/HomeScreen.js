import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Apartment from '../components/Apartment'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { listApartments } from '../actions/apartmentActions'



function HomeScreen({ history }) {

  const dispatch = useDispatch()
  const apartmentList = useSelector(state => state.apartmentList)
  const { error, loading, apartments } = apartmentList


  useEffect(() => {
    dispatch(listApartments())
  }, [dispatch])

  return (
    <div>

      <h1>Apartments</h1>
      {loading ? <Loader />
        : error ? <Message variant='secondary'>{error}</Message>
          :
          <div>
            <Row>
              {apartments.map(apartment => (
                <Col key={apartment.id} sm={12} md={6} lg={4} xl={3}>
                  <Apartment apartment={apartment} />
                </Col>
              ))}
            </Row>
          </div>
      }


    </div>

  )
}

export default HomeScreen