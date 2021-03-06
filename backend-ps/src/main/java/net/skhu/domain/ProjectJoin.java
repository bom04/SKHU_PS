package net.skhu.domain;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@ToString(exclude = {})
@EqualsAndHashCode(exclude = {})
@Entity
public class ProjectJoin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int joinId;

	LocalDateTime joinTime;
	String color;
	boolean pin;
	int type;
	int state;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userId")
	User user;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "projectId")
	Project project;
	public ProjectJoin() {
		
	}
	public ProjectJoin(LocalDateTime joinTime,User user,Project project) {
		this.joinTime=joinTime;
		this.state=1;
		this.color="#000000";
		this.pin=false;
		this.type=0;
		this.user=user;
		this.project=project;
	}
}
