import { Injectable } from '@angular/core';
import { PainPoint } from '../models/pain-point.model';

@Injectable({
  providedIn: 'root'
})
export class PainPointService {
  private painPoints: PainPoint[] = [
    { id: 1, title: 'Network Latency', description: 'High latency in accessing the data server.', upvotes: 10, comments: 2 },
    { id: 2, title: 'User Interface Bug', description: 'Dropdown menus do not align properly on smaller screens.', upvotes: 8, comments: 1 },
    { id: 3, title: 'Performance Issues', description: 'The application slows down significantly after 3 PM everyday.', upvotes: 15, comments: 3 },
    { id: 4, title: 'Login Failures', description: 'Intermittent login failures during peak hours.', upvotes: 20, comments: 4 },
    { id: 5, title: 'Data Sync Error', description: 'Errors when syncing data between the server and the client app.', upvotes: 11, comments: 2 },
    { id: 6, title: 'Memory Leaks', description: 'The application consumes more memory than expected.', upvotes: 25, comments: 5 },
    { id: 7, title: 'Email Delays', description: 'Email notifications are delayed by several hours.', upvotes: 18, comments: 3 },
    { id: 8, title: 'Report Generation', description: 'Generating reports takes longer than expected.', upvotes: 9, comments: 2 },
    { id: 9, title: 'Mobile App Crashes', description: 'The mobile app crashes frequently on older devices.', upvotes: 30, comments: 6 },
    { id: 10, title: 'Security Flaw', description: 'A security flaw was found that could expose user data.', upvotes: 45, comments: 8 }
  ];

  constructor() {}

  getPainPoints(): PainPoint[] {
    return this.painPoints;
  }
}
