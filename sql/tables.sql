create table routes(
  id serial not null primary key,
  route_name text,  
  fare decimal (10,2));

create table taxi(
   taxi_id serial not null,
   regnumber varchar(255) not null
);

create table trip(
trip_id serial not null,
location text,
constraint fk_id
foreign key (id) references routes(id),
foreign key (taxi_id) references taxi(id)
);

create table region(
    region_id serial not null,
    region_name text
);


