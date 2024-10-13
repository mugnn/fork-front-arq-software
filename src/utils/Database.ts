import { Space } from "./interfaces/Space";
import { SpaceRequest } from "./interfaces/SpaceRequest";
import { User } from "./interfaces/User";

const users: User[] = [
  // { _id: 1, login: "john_doe", username: "John Doe", role: "ADMIN" },
  // { _id: 2, login: "jane_smith", username: "Jane Smith", role: "TEATCHER" },
  // { _id: 3, login: "alice_wonder", username: "Alice Wonder", role: "TEATCHER" },
  // { _id: 4, login: "bob_builder", username: "Bob Builder", role: "MANAGER" },
  // { _id: 5, login: "chris_potter", username: "Chris Potter", role: "TEATCHER" },
  // { _id: 6, login: "dave_brave", username: "Dave Brave", role: "TEATCHER" },
  // { _id: 7, login: "eva_green", username: "Eva Green", role: "MANAGER" },
  // { _id: 8, login: "frank_mills", username: "Frank Mills", role: "MANAGER" },
  // { _id: 9, login: "george_king", username: "George King", role: "TEATCHER" },
  // { _id: 10, login: "harry_smith", username: "Harry Smith", role: "TEATCHER" },
];

const spaces: Space[] = [
  {
    _id: 1,
    creator: users[0],
    name: "Room A101",
    resources: "Projector, WiFi",
    capacity: 30,
    type: "CLASSROOM",
    status: "AVAILABLE",
  },
  {
    _id: 2,
    creator: users[1],
    name: "Room B102",
    resources: "Chairs, Tables",
    capacity: 50,
    type: "AUDITORIUM",
    status: "UNAVAILABLE",
  },
  {
    _id: 3,
    creator: users[2],
    name: "Lab C103",
    resources: "Computers, Printers",
    capacity: 20,
    type: "LABORATORY",
    status: "AVAILABLE",
  },
  {
    _id: 4,
    creator: users[3],
    name: "Room D104",
    resources: "WiFi, Projector",
    capacity: 40,
    type: "CLASSROOM",
    status: "AVAILABLE",
  },
  {
    _id: 5,
    creator: users[4],
    name: "Auditorium E105",
    resources: "Sound System, Lights",
    capacity: 100,
    type: "AUDITORIUM",
    status: "UNAVAILABLE",
  },
];

const spaceRequests: SpaceRequest[] = [
  {
    _id: 1,
    requester: users[0],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[0],
    title: "Math Class",
    startDate: "2024-10-10T08:00:00",
    endDate: "2024-10-10T10:00:00",
    description: "Math 101 class",
    status: "PENDING",
  },
  {
    _id: 2,
    requester: users[1],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[1],
    title: "Physics Lecture",
    startDate: "2024-10-11T09:00:00",
    endDate: "2024-10-11T11:00:00",
    description: "Physics introduction",
    status: "APPROVED",
    manager: users[5], // O campo manager só existe quando o status não é "PENDING"
    action_time: "2024-10-11T12:00:00" // Data e hora da aprovação
  },
  {
    _id: 3,
    requester: users[2],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[2],
    title: "Computer Lab",
    startDate: "2024-10-12T13:00:00",
    endDate: "2024-10-12T15:00:00",
    description: "Lab session",
    status: "REPROVED",
    manager: users[6],
    action_time: "2024-10-12T16:00:00"
  },
  {
    _id: 4,
    requester: users[3],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[3],
    title: "History Class",
    startDate: "2024-10-13T10:00:00",
    endDate: "2024-10-13T12:00:00",
    description: "World History overview",
    status: "PENDING",
  },
  {
    _id: 5,
    requester: users[4],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[4],
    title: "Music Recital",
    startDate: "2024-10-14T14:00:00",
    endDate: "2024-10-14T17:00:00",
    description: "End of year recital",
    status: "OUT_DEADLINE",
    manager: users[7],
    action_time: "2024-10-14T18:00:00"
  },
  {
    _id: 6,
    requester: users[5],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[0],
    title: "Math Workshop",
    startDate: "2024-10-15T08:00:00",
    endDate: "2024-10-15T11:00:00",
    description: "Advanced Math",
    status: "APPROVED",
    manager: users[8],
    action_time: "2024-10-15T12:00:00"
  },
  {
    _id: 7,
    requester: users[6],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[1],
    title: "Physics Lab",
    startDate: "2024-10-16T09:00:00",
    endDate: "2024-10-16T12:00:00",
    description: "Physics practical",
    status: "PENDING",
  },
  {
    _id: 8,
    requester: users[7],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[2],
    title: "Chemistry Lab",
    startDate: "2024-10-17T13:00:00",
    endDate: "2024-10-17T15:00:00",
    description: "Chemistry experiments",
    status: "APPROVED",
    manager: users[9],
    action_time: "2024-10-17T16:00:00"
  },
  {
    _id: 9,
    requester: users[8],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[3],
    title: "English Class",
    startDate: "2024-10-18T10:00:00",
    endDate: "2024-10-18T12:00:00",
    description: "English Language basics",
    status: "REPROVED",
    manager: users[2],
    action_time: "2024-10-18T13:00:00"
  },
  {
    _id: 10,
    requester: users[9],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[4],
    title: "Drama Rehearsal",
    startDate: "2024-10-19T15:00:00",
    endDate: "2024-10-19T18:00:00",
    description: "Final rehearsal for play",
    status: "PENDING",
  },
  {
    _id: 11,
    requester: users[0],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[0],
    title: "Geometry Class",
    startDate: "2024-10-20T08:00:00",
    endDate: "2024-10-20T10:00:00",
    description: "Introduction to Geometry",
    status: "PENDING",
  },
  {
    _id: 12,
    requester: users[1],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[1],
    title: "History Lecture",
    startDate: "2024-10-21T09:00:00",
    endDate: "2024-10-21T11:00:00",
    description: "Medieval History",
    status: "APPROVED",
    manager: users[3],
    action_time: "2024-10-21T12:00:00"
  },
  {
    _id: 13,
    requester: users[2],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[2],
    title: "IT Workshop",
    startDate: "2024-10-22T13:00:00",
    endDate: "2024-10-22T15:00:00",
    description: "Introduction to Programming",
    status: "OUT_DEADLINE",
    manager: users[4],
    action_time: "2024-10-22T16:00:00"
  },
  {
    _id: 14,
    requester: users[3],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[3],
    title: "Geography Class",
    startDate: "2024-10-23T10:00:00",
    endDate: "2024-10-23T12:00:00",
    description: "Geography 101",
    status: "APPROVED",
    manager: users[0],
    action_time: "2024-10-23T13:00:00"
  },
  {
    _id: 15,
    requester: users[4],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[4],
    title: "Band Practice",
    startDate: "2024-10-24T14:00:00",
    endDate: "2024-10-24T17:00:00",
    description: "Music Band rehearsal",
    status: "PENDING",
  },
  {
    _id: 16,
    requester: users[5],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[0],
    title: "Algebra Class",
    startDate: "2024-10-25T08:00:00",
    endDate: "2024-10-25T10:00:00",
    description: "Algebra basics",
    status: "APPROVED",
    manager: users[1],
    action_time: "2024-10-25T11:00:00"
  },
  {
    _id: 17,
    requester: users[6],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[1],
    title: "Art Exhibition",
    startDate: "2024-10-26T09:00:00",
    endDate: "2024-10-26T12:00:00",
    description: "Modern Art display",
    status: "REPROVED",
    reason: "Requester ask for being reproved, she will open another request", 
    manager: users[5],
    action_time: "2024-10-26T13:00:00"
  },
  {
    _id: 18,
    requester: users[7],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[2],
    title: "Science Fair",
    startDate: "2024-10-27T13:00:00",
    endDate: "2024-10-27T16:00:00",
    description: "Student Science projects",
    status: "APPROVED",
    manager: users[6],
    action_time: "2024-10-27T17:00:00"
  },
  {
    _id: 19,
    requester: users[8],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[3],
    title: "Literature Class",
    startDate: "2024-10-28T10:00:00",
    endDate: "2024-10-28T12:00:00",
    description: "Exploring Classics",
    status: "PENDING",
  },
  {
    _id: 20,
    requester: users[9],
    openRequestDate: '2024-10-29T17:00:00',
    space: spaces[4],
    title: "Music Concert",
    startDate: "2024-10-29T17:00:00",
    endDate: "2024-10-29T19:00:00",
    description: "Year-end concert",
    status: "PENDING",
  },
];


export default {
  users,
  spaces,
  spaceRequests,
};
